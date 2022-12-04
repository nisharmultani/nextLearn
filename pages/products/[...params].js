
import {useRouter} from 'next/router'
export default function ProductItem(){
    const router = useRouter()
    console.log(router)
    const {id} = router.query

    return(
        <div>
            <h2>
                this is single prodict page {id}
            </h2>
        </div>
    )

} 