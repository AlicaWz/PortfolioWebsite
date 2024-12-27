import fs from 'fs'
import path from 'path'

// This function is used to get the breakpoints from the css file server side. For client side please use the viewwport.ts function
export function getBreakpoints() {
	const cssContent = fs.readFileSync(
		path.join(process.cwd(), 'src/css/base/_mediaqueries.css'),
		'utf8'
	)
	const breakpoints: { [key: string]: number } = {}
	const regex = /@custom-media\s+--(\w+)\s+\(([^)]+)\);/g
	let match

	while ((match = regex.exec(cssContent)) !== null) {
		const [, name, value] = match
		const matchResult = /\d+/.exec(value)
		const numericValue = matchResult ? parseInt(matchResult[0], 10) : 0
		breakpoints[name] = numericValue
	}

	console.log(`breakpoints read server side from css file: ${JSON.stringify(breakpoints)}`)

	return breakpoints
}
