function txtarea(){
  return 'this is a normal text'
}
document.getElementById('textArea').innerHTML = txtarea()


const obj = {
  names : "sajeb chakraborty",
  email : ' sajibkumar711@gmail.com',
    ret : function person () {
      return this.names + this.email
    }
  }
  document.getElementById('perobj').innerHTML = obj.ret()
  