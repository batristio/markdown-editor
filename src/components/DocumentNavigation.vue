<template>
  <div class="DocumentNavigation">
    "Document navigation"
    <div>
      <button
        :disabled="isAddingNewDocument || isUpdatingDocument"
        @click="setIsAddingNewDocument(true)"
      >
        New Document
      </button>

      <div v-show="isAddingNewDocument || isUpdatingDocument">
        <input
          v-model="localDocument.name"
          type="text"
          placeholder="Type in the new document name."
        >

        <div>
          <button
            @click="saveDocument"
          >
            {{ isAddingNewDocument ? 'Save' : 'Update' }}
          </button>

          <button
            @click="isAddingNewDocument 
              ? cancelAddingDocument()
              : cancelUpdatingDocument()"
          >
            Cancel
          </button>
        </div>
      </div>

      <ul>
        <Document
          v-for="document in documents"
          :key="document.uid"
          :document="document"
          @edit="editDocument(document)"
          @delete="confirmDeleteDocument(document.uid)"
          @click="setCurrentDocument(document.uid)"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid';
import { mapActions, mapGetters } from 'vuex'

import Document from './Document.vue'

export default {
  name: 'DocumentNavigation',

  components: {
    Document
  },

  data () {
    return {
      localDocument: {
        name: '',
        uid: null
      }
    }
  },

  computed: {
    ...mapGetters([
      'documents',
      'isAddingNewDocument',
      'isUpdatingDocument'
    ])
  },

  methods: {
    ...mapActions([
      'addDocument',
      'deleteDocument',
      'updateDocument',
      'setIsAddingNewDocument',
      'setIsUpdatingDocument',
      'setCurrentDocument'
    ]),

    editDocument(document) {
      this.localDocument = { ...document }
      this.setIsUpdatingDocument(true)
    },

    saveDocument () {
      debugger
      if (this.localDocument.name === '') return
      if (this.localDocument.uid !== undefined && this.localDocument.uid !== null) {
        this.updateDocument(this.localDocument)
        return this.localDocument = {}
      }

      this.addDocument({
        uid: uuid(),
        name: this.localDocument.name
      })

      this.setIsAddingNewDocument(false)
      return this.localDocument = {}
    },
    
    cancelAddingDocument() {
      this.localDocument = {}
      this.setIsAddingNewDocument(false)
    },

    cancelUpdatingDocument () {
      if (confirm('Are you sure you want to cancel editing this document? The action cannot be undone.')) {
        this.localDocument = {}
        this.setIsUpdatingDocument(false)
      }
    },

    confirmDeleteDocument (uid) {
      if (confirm('Are you sure you want to delete this document? The action cannot be undone.')) {
        this.deleteDocument(uid)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.DocumentNavigation {
  background-color: green;
  display: inline-block;
  width: 20%;
}
</style>
