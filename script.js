const frame = [
    {
        category : 'breakfast',
        image: "20210914_172354.jpg",
        title : 'Bread',
        price : '50',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quia architecto ipsa quis provident iste quibusdam consequuntur in quae Lorem ipsum dolor sit.' 
    },
    {
        category : 'breakfast',
        image: "20210918_200420.jpg",
        title : 'Beans',
        price : '53',
        details: ' Commodi labore repellat excepturi earum sequi molestias repudiandae non odio ea quisquam ab voluptates dicta debitis quo, tempora totam nam magni.' 
    },
    {
        category : 'lunch',
        image: "20211116_120211.jpg",
        title : 'Amala',
        price : '65',
        details: 'Autem assumenda eaque sit voluptatem consectetur dolorum et. Ducimus quam quos vero ipsum illum dicta in veniam quod voluptate recusandae aut assumenda voluptatibus.' 
    },
    {
        category : 'shakes',
        image: "20211126_234427.jpg",
        title : 'yam',
        price : '48',
        details: 'quo repudiandae. Inventore, neque tenetur sit nesciunt consequuntur, optio illum fuga modi eligendi non corporis dolor explicabo animi. Dolorum unde alias molestiae quod.' 
    },
    {
        category : 'dinner',
        image: "20220207_195528.jpg",
        title : 'susage roll',
        price : '83',
        details: 'aperiam vel. Nam, dolorem culpa? Sequi est libero nemo blanditiis dolores aliquid optio! Ut delectus officiis, laboriosam et accusantium ipsam neque facere est tempore!' 
    },
    {
        category : 'shakes',
        image: "20210914_172354.jpg",
        title : 'sandwich',
        price : '36',
        details: 'praesentium vel minima dolores alias. Ab repellendus neque a illum, eos nostrum doloribus et tenetur. Fugit obcaecati suscipit voluptas animi possimus illum dolore expedita.' 
    },
    {
        category : 'lunch',
        image: "20210918_200420.jpg",
        title : 'chicken',
        price : '29',
        details: 'rem nihil repellendus, doloremque molestias dolores doloribus vel fuga voluptatibus quisquam dolore cupiditate. Fuga consequatur magni quod accusamus eaque, vel natus.' 
    },
    {
        category : 'shakes',
        image: "20210918_200420.jpg",
        title : 'parfait',
        price : '14',
        details: 'voluptate obcaecati sint recusandae quisquam totam enim! Ea, asperiores! Blanditiis incidunt fugiat doloribus atque mollitia voluptatibus voluptas suscipit amet.' 
    },
    {
        category : 'dinner',
        image: "20210914_172354.jpg",
        title : 'smoothie',
        price : '67',
        details: 'doloremque nam. Iusto ducimus voluptatibus, officia reiciendis possimus unde doloremque error, quod magnam labore ut exercitationem vitae rerum vel nihil optio voluptas mollitia!.' 
    },
    {
        category : 'lunch',
        image: "20211126_234427.jpg",
        title : 'fruit',
        price : '37',
        details: 'animi id accusantium temporibus nam esse nemo nobis aliquam ex molestiae eum velit distinctio facere maxime perspiciatis! Beatae vero a voluptatum assumenda accusantium ducimus.' 
    },
    {
        category : 'dinner',
        image: "20210918_200420.jpg",
        title : 'juice',
        price : '61',
        details: 'Beatae, repellat hic. Ipsa quisquam nostrum aperiam, veritatis assumenda debitis voluptate commodi incidunt eligendi consectetur nesciunt molestias adipisci under.' 
    },
    {
        category : 'lunch',
        image: "20211126_234427.jpg",
        title : 'coffee',
        price : '43',
        details: ' Distinctio, qui ipsam. Dolore, ad ducimus aut eligendi doloribus ipsum consequuntur quam harum consectetur odit vitae eius dignissimos, vero, aliquid est.  obcaecati ad quibusdam.' 
    },
    {
        category : 'breakfast',
        image: "20211116_120211.jpg",
        title : 'vegetables',
        price : '73',
        details: 'Repellat illo optio doloribus, sapiente animi quos possimus aspernatur reprehenderit autem magnam dolore, nostrum commodi odit nulla beatae quaerat id molestiae, omnis quam .' 
    },
    {
        category : 'dinner',
        image: "20211116_120211.jpg",
        title : 'sharwarma',
        price : '32',
        details: 'Explicabo odio quaerat labore deleniti consequuntur facilis commodi nemo minima at, deserunt iure soluta harum repellat adipisci, vitae voluptatibus eum .' 
    },
    {
        category : 'breakfast',
        image: "20220207_195528.jpg",
        title : 'cold stone',
        price : '63',
        details: 'Delectus repellat adipisci eum autem incidunt quam distinctio consectetur laboriosam neque minus, unde explicabo nihil!  id dignissimos sit voluptates praesentium.' 
    }
];

const container = document.querySelector('.main-container');
const buttons = document.querySelectorAll('.btns');


//load items
window.addEventListener('DOMContentLoaded',function()
{
   displayFrameItem(frame);
});

//filter items
buttons.forEach(function(btn){
    btn.addEventListener('click', function(e) {
        const cat = e.currentTarget.dataset.me;
        // console.log(cat);
       const frameCat = frame.filter(function(frames){
        // console.log(frames.category);
        if (frames.category === cat) {
            return frames
        }
                 });
                console.log(frameCat);
        if (cat === "all") {
            displayFrameItem(frame)
        }
        else{
            displayFrameItem(frameCat)
        }
                
       })
       
});


function displayFrameItem(frameItem) {
    let displayFrame = frameItem.map(function(item){
    
        return   `<div class="container">
            <img src=${item.image} alt=${item.title}>
        <div class="info">
            <div class="title_price">
                <p > <strong> ${item.title}</strong>  </p>
                <p class="price"><strong>$${item.price}</strong></p>
            </div>
            <p class="details">${item.details}</p>
            </div>
    
        </div>`;
       });
    
    
       displayFrame = displayFrame.join('')
    
       container.innerHTML = displayFrame;
};
