import React, { useState } from 'react'
// import Comingsoon from './components/Comingsoon'
// import Nowplaying from './components/Nowplaying'

export default function App() {
    const [type, setType] = useState(1)
    const Comp1 = React.lazy(() => import(`./components/Nowplaying`))
    const Comp2 = React.lazy(() => import(`./components/Comingsoon`))
    return (
        <React.Suspense fallback={<div>加载中</div>}>
            <div>
                <button onClick={() => setType(1)}>正在热源</button>
                <button onClick={() => setType(2)}>即将上映</button>

                {type == 1 ?
                    <Comp1 /> :
                    <Comp2 />}
            </div>
        </React.Suspense>
    )
}

