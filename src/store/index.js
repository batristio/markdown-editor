import { createStore } from 'vuex'

export default createStore({
  state: {
    documents: [],
    isAddingNewDocument: false,
    isUpdatingDocument: false,
    currentDocument: null
  },

  getters: {
    documents: (state) => state.documents,
    isAddingNewDocument: (state) => state.isAddingNewDocument,
    isUpdatingDocument: (state) => state.isUpdatingDocument,
    currentDocument: (state) => state.currentDocument
  },

  actions: {
    addDocument ({ commit }, document) {
      commit('setDocument', document)
    },
    
    updateDocument ({ commit }, document) {
      commit('updateDocument', document)
    },

    deleteDocument({ commit }, uid) {
      commit('deleteDocument', uid)
    },

    loadDocuments ({ commit }) {
      commit('loadDocuments')
    },

    setIsAddingNewDocument ({ commit }, boolean) {
      commit('setIsAddingNewDocument', boolean)
    },

    setIsUpdatingDocument ({ commit }, boolean) {
      commit('setIsUpdatingDocument', boolean)
    },
    setCurrentDocument ({ commit }, uid) {
      commit('setCurrentDocument', uid)
    }
  },

  mutations: {
    setDocument (state, document) {
      state.documents.unshift(document)
      localStorage.setItem('documents', JSON.stringify(state.documents))
    },

    updateDocument (state, document) {
      state.documents.forEach((it, i) => {
        if (it.uid === document.uid) {
          state.documents[i] = document
          localStorage.setItem('documents', JSON.stringify(state.documents))
        }
      })
    },

    deleteDocument (state, uid) {
      state.documents.forEach((it, i) => {
        if (it.uid === uid) {
          state.documents.splice(i, 1)
          localStorage.setItem('documents', JSON.stringify(state.documents))
        }
      })
    },

    loadDocuments (state) {
      if (!localStorage.getItem('documents')) return
      state.documents = JSON.parse(localStorage.getItem('documents'))
    },

    setIsAddingNewDocument(state, boolean) {
      state.isAddingNewDocument = boolean
    },

    setIsUpdatingDocument(state, boolean) {
      state.isUpdatingDocument = boolean
    },

    setCurrentDocument(state, uid) {
      state.currentDocument = state.documents.filter(it => it.uid === uid)
    }
  }
})
