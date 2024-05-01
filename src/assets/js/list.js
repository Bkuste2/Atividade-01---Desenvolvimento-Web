const getRegistrations = () => JSON.parse(localStorage.getItem("registrations"))

const getList = () => {
  const registers = getRegistrations()

  const registerList = document.getElementById("registerList")

  registers.forEach((register, index) => {
    const tr = document.createElement("tr")
    const values = Object.values(register)

    const isLastItem = register.lenght === index + 1
    values.forEach(value => {
      const td = document.createElement("td")
      td.innerText = value
      td.classList = isLastItem ? "p-4 border-2" : "p-4 border-2 border-l-0 border-b-0"

      tr.append(td)
    })

    const td = document.createElement("td")
    td.classList = "p-4 border-l-2 border-t-2"

    td.innerHTML = `<button class="font-semibold text-red-900" onclick="deleteRegister(${register.id})">Deletar</button>`
    tr.append(td)
    registerList.append(tr)
  })
}

const deleteRegister = (id) => {
  const registers = getRegistrations()
  const registrations = registers.filter(register => register.id != +id)
  const confirmation = window.confirm("Deseja realmente deletar este registro?")
  if(!confirmation) return 
  localStorage.setItem("registrations", JSON.stringify(registrations, null, 2))
  window.location.reload();
}