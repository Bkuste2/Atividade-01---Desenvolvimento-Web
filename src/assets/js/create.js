const getRegistrations = () => JSON.parse(localStorage.getItem("registrations"))

function generateRandomNumber() {
  let randomNumber = '';
  for (let i = 0; i < 10; i++) {
    randomNumber += Math.floor(Math.random() * 10);
  }
  return randomNumber;
}

function addRegistration() {
  const registerForm = document.getElementById("registerForm")
  const plate = registerForm.plate.value
  const name = registerForm.name.value
  const apartmentNumber = registerForm.apartmentNumber.value
  const apartmentBlock = registerForm.apartmentBlock.value
  const model = registerForm.model.value
  const color = registerForm.color.value
  const parkingNumber = registerForm.parkingNumber.value



  const formData = {
    id: generateRandomNumber(),
    name,
    apartmentNumber,
    apartmentBlock,
    plate,
    model,
    color,
    parkingNumber,
  }

  const oldRegister = getRegistrations()
  const parsedRegisters = oldRegister ?? []
  const newRegister = oldRegister ? [...parsedRegisters, formData] : [formData]

  localStorage.setItem("registrations", JSON.stringify(newRegister), null, 2)

  console.log("USER DATA:")
  console.table(formData)
  alert("Cadastro realizado com sucesso")
}