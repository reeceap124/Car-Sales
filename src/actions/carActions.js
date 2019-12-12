export const addFeature = (item) => {
    return {type: 'ADD_FEATURE', payload: item}
}

export const removeFeature = (id) => {
    return {type: 'REMOVE_FEATURE', payload: id}
}