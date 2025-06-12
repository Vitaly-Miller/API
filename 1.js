//========> Environment <==========
const BODY = pm.response.json()
pm.environment.set('TOKEN', BODY.payload.token)

