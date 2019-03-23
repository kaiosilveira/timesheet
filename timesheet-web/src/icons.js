import { faBars, faPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const solidIcons = [faBars, faPlus, faEdit, faTrashAlt]

const configureFontAwesomeLibrary = (library, icons) => library.add(...icons)

export default configureFontAwesomeLibrary