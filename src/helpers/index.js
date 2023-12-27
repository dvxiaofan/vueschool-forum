export const findById = (resources, id) => {
  if (!resources) return null
  return resources.find(r => r.id === id)
}
export const upsert = (resources, resource) => {
  const index = resources.findIndex(item => item.id === resource.id)
  if (resource.id && index !== -1) {
    resources.splice(index, 1, resource)
  } else {
    resources.push(resource)
  }
}
