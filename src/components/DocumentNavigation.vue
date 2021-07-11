<template>
  <div class="DocumentNavigation">
    "Document navigation"

    <div>
      <button
        :disabled="isAddingNewDocument"
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
            :hidden="isUpdatingDocument"
            @click="saveDocument"
          >
            Save
          </button>
        </div>

        <div>
          <button
            :hidden="isAddingNewDocument"
            @click="saveUpdatedDocument"
          >
            Update
          </button>

          <button
            :hidden="isAddingNewDocument"
            @click="cancelUpdatingDocument"
          >
            Cancel
          </button>
        </div>
      </div>

      <ul>
        <Document
          v-for="document in documents"
          :key="document.uid"
          :name="document.name"
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
import { mapActions,mapGetters } from 'vuex'

import Document from './Document.vue'

export default {
  name: 'DocumentNavigation',

  components: {
    Document
  },

  data () {
    return {
      localDocument: {}
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
      this.localDocument.name = document.name
      this.localDocument.uid = document.uid
      this.setIsUpdatingDocument(true)
    },

    saveDocument () {
      if (this.localDocument.name === '') return
      this.addDocument({
        uid: uuid(),
        name: this.localDocument.name
      })
      this.localDocument.name = ''
      this.setIsAddingNewDocument(false)
    },

    saveUpdatedDocument () {
      if (this.localDocument.name === '') return
      this.updateDocument(this.localDocument)
      this.localDocument.name = ''
      this.setIsUpdatingDocument(false)
    },

    cancelUpdatingDocument () {
      if (confirm('Are you sure you want to cancel editing this document? The action cannot be undone.')) {
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
