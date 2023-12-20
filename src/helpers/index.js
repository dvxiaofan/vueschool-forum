export const findById = (resource, id) => resource.find(item => item.id === id)

export const upsert = (resources, resource) => {
  const index = resources.findIndex(item => item.id === resource.id)
  if (resource.id && index !== -1) {
    resources.splice(index, 1, resource)
  } else {
    resources.push(resource)
  }
}
