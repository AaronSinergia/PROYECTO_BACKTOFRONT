export const apiAttendance = async (ev) => {
  try {
    const checkChecked = ev.target.checked;

    if (checkChecked) {
      const userID = localStorage.getItem('id');
      const checkboxClassName = ev.target.className;

      const apiUrlAssistantGoingToEventChecked = `http://localhost:3000/api/events/newAssistant/${checkboxClassName}`;

      const response = await fetch(apiUrlAssistantGoingToEventChecked, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify({
          assistants: userID,
        }),
      });

      if (response.ok) {
        console.log('Asistente agregado correctamente');
      } else {
        console.error('Error al agregar asistente');
        alert('El usuario ya está como asistente al evento');
      }
    }
  } catch (error) {
    console.error('Error en la función apiAttendance:', error);
  }
};

export default apiAttendance;
