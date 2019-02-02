import * as types from '../constants/types'

export const getProjects = () =>
  dispatch =>
    fetch(`projects.json`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: types.FETCH_PROJECTS,
          payload: response.projects
        })
      })

