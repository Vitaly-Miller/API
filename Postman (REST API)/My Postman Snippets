//======== Response => Environment ========= 
const BODY = pm.response.json()
pm.environment.set('TOKEN', BODY.payload.token)

//========= Request => Environment =========           
const BODY = JSON.parse(pm.request.body.raw)             // Парсим "сырой" JSON из тела ЗАПРОСА
pm.environment.set('EMAIL', BODY.email)

//==== Part of massage => Environment === (😱 MongoDB ObjectID) ====
const BODY = pm.response.json()
const LINK = BODY.payload.items[0].message.match(/[a-f0-9]{24}\/[a-f0-9]{24}/)         //   6849eb9b9f6aabae379e923f/6849eb9b9f6aabae379e9240
pm.environment.set("VERIFY_LINK", LINK)
console.log("🔗 VERIFY_LINK =", LINK)

//======== Status code is 200-OK ==========
pm.test('🟢 Status code is 200-OK', () => {
    pm.response.to.have.status(200)
});

//======== Status code is 201-Created ==========
pm.test('🟢 Status code is 201-Created', () => {
    pm.response.to.have.status(201)
});

//========= Status code is 400 (Bad Request) =========
pm.test('🔴 Status code is 400 (Bad Request)', () => {
    pm.response.to.have.status(400)
});

//========= Status code is 404 (Not Found) =========
pm.test('🔴 Status code is 404 (Not Found)', () => {
    pm.response.to.have.status(404)
});



//============== Response Time ==============
pm.test('⌛️ Response Time < 1000 ms', () => {
    pm.expect(pm.response.responseTime, '🔺').to.be.below(1000)
});



//================================ Message =============================
pm.test('🏷️ Message = "User created." | First Name = 3 symbols', () => {
    let BODY = pm.response.json()
    pm.expect(BODY.message, '🔺NO message🔺').to.exist
    pm.expect(BODY.message, '🔺Wrong Text🔺').to.equal('User created.')                         
});

//======= Property (check) =========
pm.test("🔑 Token Received", () => {
    let BODY = pm.response.json()
    pm.expect(BODY.payload, '🔺Key "token": is missing🔺').to.have.property("token")       //Variant-1 - .to.have.property()
    pm.expect(BODY.payload.token, '🔺Key "token": is missing🔺').to.exist                  //Variant-2 - ().to.not.be.empty
    pm.expect(BODY.payload.token, '🔺Token is empty🔺').to.not.be.empty
});

//=============================== Check [Array] ============================== 
pm.test('⛔️ Role = New (Email NOT Verified | Access is restricted.)', () => {
    let BODY = pm.response.json()
    pm.expect(BODY.payload.user.roles, '🔺NO Role🔺').to.exist
    pm.expect(BODY.payload.user.roles[0], '🔺Email already Verified🔺').to.equal('new')      // roles[0] - самое первое его значение массива                  
});

