export const sortArrayByPropertyWithoutNumbers = (array: any[], variable: string) =>
  {
	return array.sort((a, b) => {
		const variable1 = a[variable].toLowerCase().replace(/[^a-zA-Z ]/g, '').trim();
		const variable2 = b[variable].toLowerCase().replace(/[^a-zA-Z ]/g, '').trim();
		return variable1.localeCompare(variable2)
	})
  }
