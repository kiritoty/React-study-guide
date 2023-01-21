import ShallowRender from 'react-test-renderer/shallow'
import App from '../App'
import ReactTestUnil from 'react-dom/test-utils'

describe("react-test-render", () => {
    it("app name is eth", () => {
        const render = new ShallowRender()
        render.render(<App/>)
        expect(render.getRenderOutput().props.children[0].type).toBe("h1")
    })

})