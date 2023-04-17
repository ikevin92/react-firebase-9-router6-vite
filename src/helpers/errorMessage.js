
export const getErrorMessageFromFirebaseError = (error) => {
  switch (error.code) {
    case 'auth/invalid-custom-token':
      return 'El token personalizado proporcionado no es válido. Por favor, inténtelo de nuevo.';
    case 'auth/custom-token-mismatch':
      return 'El token personalizado proporcionado no coincide con la ID del proyecto o la clave secreta de la aplicación. Por favor, inténtelo de nuevo.';
    case 'auth/invalid-email-verified':
      return 'El correo electrónico proporcionado no está verificado. Por favor, verifique su correo electrónico e inténtelo de nuevo.';
    case 'auth/unauthorized-continue-uri':
      return 'El dominio de retorno no está en la lista blanca. Por favor, contacte al administrador del sistema o utilice un dominio autorizado.';
    case 'auth/invalid-display-name':
      return 'El nombre de usuario proporcionado no es válido. Por favor, utilice un nombre de usuario válido.';
    case 'auth/invalid-photo-url':
      return 'La URL de la foto de perfil proporcionada no es válida. Por favor, utilice una URL de foto de perfil válida.';
    case 'auth/email-already-in-use':
      return 'La dirección de correo electrónico ya está siendo utilizada por otra cuenta. Por favor, utilice una dirección de correo electrónico diferente.';
    case 'auth/invalid-email':
      return 'La dirección de correo electrónico proporcionada no es válida. Por favor, utilice una dirección de correo electrónico válida.';
    case 'auth/invalid-password':
      return 'La contraseña proporcionada no es válida. Debe tener al menos 6 caracteres. Por favor, utilice una contraseña válida.';
    case 'auth/user-disabled':
      return 'La cuenta de usuario ha sido deshabilitada por un administrador. Por favor, contacte al administrador del sistema.';
    case 'auth/user-not-found':
      return 'No se encontró ningún usuario con el correo electrónico proporcionado. Por favor, revise su correo electrónico e inténtelo de nuevo.';
    case 'auth/wrong-password':
      return 'La contraseña proporcionada es incorrecta. Por favor, vuelva a intentarlo.';
    default:
      return 'Se produjo un error inesperado. Por favor, inténtelo de nuevo.';
  }
};
