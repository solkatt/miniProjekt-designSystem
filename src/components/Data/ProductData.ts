import { Product } from "../../App"
import silentperformer from "../../img/silentperformer.jpg"
import profamily from "../../img/profamily.jpg"
import powerline from "../../img/powerline.jpg"
import proanimal from "../../img/proanimal.png"

export const ProductData : Product[] = [
{
    id: 0,
    name: 'Electrolux SilentPerformer',
    description: 'BESKRIVNING',
    price: 1995,
    image: silentperformer
    },
    
   {id: 1,
    name: "Bosch Cosyy'y ProFamily GL-40",
    description: 'BESKRIVNING',
    price: 2495,
    image: profamily
    },
    
   {id: 2,
    name: 'Miele Complete C3 Medicair Powerline',
    description: 'BESKRIVNING',
    price: 2995,
    image: powerline
    },
    
   {id: 3,
    name: 'Bosch ProAnimal Series 8',
    description: 'BESKRIVNING',
    price: 2995,
    image: proanimal
    },
]

export default ProductData