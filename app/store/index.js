export const state = () => ({
  isLoggerdIn: false,
  user: null
})

export const getters = {
  isLoggerdIn: (state) => state.isLoggerdIn,
  user: (state) => state.user
}

export const mutations = {
  setUser(state,{user}){
    state.user = user,
    state.isLoggerdIn = true
  },
  updateUser(state, { user }) {
    state.user = user
  }
}

export const actions = {
  async login({commit},{id}){
    console.log(commit)
    console.log(id)
    const user = await this.$axios.$get(`/user/${id}.json`)
    if(!user.id) throw new Error('Invalid user')
    commit('setUser',{user})
  },
  async register({commit},{id}){
    console.log(commit)
    console.log(id)
    const payload = {}
    payload[id] = {id}
    await this.$axios.$patch(`/user.json`,payload)
    const user = await this.$axios.$get(`/user/${id}.json`)
    if(!user.id) throw new Error('Invalid user')
    commit('setUser', { user })
  }
}
