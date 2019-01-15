import Cookies from 'universal-cookie'

export default ({req, store}) => {
  if(process.browser){
    return
  }
  const cookies = new Cookies(req.header.cookie)
  const user = cookies.get('user')
  if(user && user.id){
    const {id,likes} = unregisterModule
    store.commit('setUser',{user:{id,like}})
  }
}
