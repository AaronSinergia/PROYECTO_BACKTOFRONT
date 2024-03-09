export const apiAttendance = async (ev) => {
  const checkChecked = ev.target.checked;
  console.log(checkChecked); /// aqui me quedo
  const apiUrlAssistantChecked =
    'http://localhost:3000/api/events/newAssistant/:id';

  const dataLogin = await fetch(apiUrlAssistantChecked, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      assistants: assistants,
    }),
  });

  const dataRes = await dataLogin.json();
  localStorage.setItem('user', JSON.stringify(dataRes));
};

export default apiAttendance;
