function check(pass) {
    let regex = /^(?=.*[A-Z])(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (["@", ".", "#", "$", "!", "%", "*", "?", "&"].includes(pass.charAt(0))) {
        return false
    }
    return regex.test(pass);
}

QUnit.test("Valid Password Test", function(assert) {
    assert.ok(check("Haikalmzg03@"), "Valid password should pass the test");
    assert.ok(check("HAIKALMZG@"), "Valid password should pass the test");
    assert.ok(check("H!MZG123@"), "Valid password should pass the test");
});
  
QUnit.test("Invalid Password Test - No Special Character", function(assert) {
    assert.notOk(check("Abcd1234"), "Password without special character should fail");
    assert.notOk(check("1234asDAb"), "Password without special character should fail");
    assert.notOk(check("1234asDAb"), "Password without special character should fail");
    assert.notOk(check("hAikalmzg03"), "Password without special character should fail");

    
});
QUnit.test("Invalud Password Test - No capital letters or special character", function(assert){
    assert.notOk(check("haikalmzg03"), "Password without special character or letters should fail");
});
QUnit.test("Password with Only Numbers - Invalid", function(assert) {
    assert.notOk(check("12345678"), "Password with only numbers not pass");
    assert.notOk(check("123"), "Password with only numbers not pass");
});
QUnit.test("Invalid test - only lowercase", function(assert) {
    assert.notOk(check("abcdefghi"), "Password with only lowercase letters and valid length should fail");
  });
  
QUnit.test("Invalid Password Test - Too Short", function(assert) {
    assert.notOk(check("Ab@12"), "Password shorter than 8 characters should fail");
});
  
QUnit.test("Invalid Password Test - Too Long", function(assert) {
    assert.notOk(check("Abcd@123456789012345"), "Password longer than 15 characters should fail");
});
QUnit.test("Invalid Password Test - Unnaceppted special char", function(assert) {
    assert.notOk(check("HaikalMZG04^"), "Password should fail because special character is not accepted");
});
QUnit.test("Invalid Password Test - special character in front", function(assert){
    assert.notOk(check("!Haikalmzg03@"), "Password should fail because Special char in front is not accepted");
    assert.notOk(check("$Haikalmzg03@"), "Password should fail because Special char in front is not accepted");
    assert.notOk(check("@Haikalmzg03@"), "Password should fail because Special char in front is not accepted");
    assert.notOk(check("&Haikalmzg03@"), "Password should fail because Special char in front is not accepted");
    assert.notOk(check("#Haikalmzg03@"), "Password should fail because Special char in front is not accepted");
    assert.notOk(check("+Haikalmzg03@"), "Password should fail because Special char in front is not accepted");
    assert.notOk(check("=Haikalmzg03@"), "Password should fail because Special char in front is not accepted");
    assert.notOk(check("(Haikalmzg03@"), "Password should fail because Special char in front is not accepted");
    assert.notOk(check(")Haikalmzg03@"), "Password should fail because Special char in front is not accepted");
    assert.notOk(check("/Haikalmzg03@"), "Password should fail because Special char in front is not accepted");
    assert.notOk(check("_Haikalmzg03@"), "Password should fail because Special char in front is not accepted");
    assert.notOk(check("*Haikalmzg03@"), "Password should fail because Special char in front is not accepted");

})
QUnit.test("Invalid Password Test - No Uppercase Letter", function(assert) {
    assert.notOk(check("haikalmzg@03"), "Password without uppercase letter should fail");
    assert.notOk(check("45545454*"), "Password without uppercase letter should fail");
    assert.notOk(check("12345678!@"), "Password without uppercase letter should fail");
});
  