export default function viewPort() {
	const ComputedStyles = getComputedStyle(document.documentElement)
	return ComputedStyles.getPropertyValue('--currentViewport').replace(/["]+/g, '')
}
