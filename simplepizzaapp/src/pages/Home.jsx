import React from 'react'
import images from '../data/images';
import Carosuel from '../components/Carousel';
import ItemList from '../components/ItemList';
import Footer from '../components/Footer';
const Home = () => {
  
  return (
    <div style={styles.homeContainer} className="home-container">
      <Carosuel>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </Carosuel>
      <div>
        <div style={StyleSheet.line}></div>

        <h3 className="text-3xl font-plex-mono text-gray-800 font-bold mt-4">Our Special Recipes</h3>
        <p className='font-plex-mono'>Those are our top recipes considering the taste and <span>price our customers claimed to be perfect !</span> </p>
        <div style={StyleSheet.line}></div>

        <ItemList />

        <div className="p-5 bg-gray-100">
          <h1 className="text-3xl font-plex-mono-bold text-center mb-6">Our Menu</h1>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="w-full lg:w-1/2">
              <img
                src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
                alt="menu-img"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl font-bold mb-4">Our Menu</h2>
              <p className="mb-4 text-gray-700">
                Our menu features a wide variety of pizzas, from classic margarita to our signature BBQ chicken pizza. We also offer a selection of salads, appetizers, and desserts to complement your meal. All of our pizzas are available in small, medium, and large sizes, so you can order the perfect amount for your group.
              </p>
              <button className="bg-[#1da1f2] hover:bg-[#1a91da] text-white font-bold py-2 px-4 rounded mt-4">
                View Menu
              </button>
            </div>
          </div>
        </div>


        <button className="bg-[#1da1f2] hover:bg-[#1a91da] mt-4 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <svg
            className="w-6 h-6 mr-2"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.93 4.93 0 0 0 2.163-2.724 9.864 9.864 0 0 1-3.127 1.195 4.922 4.922 0 0 0-8.389 4.482A13.978 13.978 0 0 1 1.675 3.149a4.921 4.921 0 0 0 1.523 6.573 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.946 4.89a4.931 4.931 0 0 1-2.224.084 4.922 4.922 0 0 0 4.604 3.419 9.868 9.868 0 0 1-6.102 2.103c-.395 0-.779-.023-1.17-.067A13.941 13.941 0 0 0 7.548 21c9.056 0 14.01-7.496 14.01-13.986 0-.21 0-.42-.015-.63a10.025 10.025 0 0 0 2.411-2.55l.002-.001z" />
          </svg>
          Share on Twitter
        </button>
      </div>





      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat error tempora ipsa nulla veniam eni
        m praesentium. Minima aliquid aliquam, est delectus ipsa qui libero fugiat facere quisquam totam. Acc
        usantium optio quae sed perferendis. Ex ducimus, beatae perferendis temporibus nobis iste, ipsa ulla
        enim praesentium. Minima aliquid aliquam, est delectus ipsa qui libero fugiat facere quisquam totam.
        enim praesentium. Minima aliquid aliquam, est delectus ipsa qui libero fugiat facere quisquam totam
        . Accusantium optio quae sed perferendis. Ex ducimus, beatae perferendis temporibus nobis iste, ips
        laborum omnis, nobis quis illo

        sunt consequatur ratione, rem minus nulla. Repellendus iste architecto molestiae quos quia! Rem obcaecati dolor in quos fuga, l
        ibero expedita aliquid rerum minima atque nulla dignissimos recusandae ea! Debitis dicta recusandae quos perferendis corrupti n

        ihil architecto est harum aspernatur impedit dolor laudantium dolorum illo commodi eius, suscipit quibusdam blanditiis aperiam

        accusantium quod veritatis, ab perferendis deleniti vitae? Ipsum animi quos harum commodi similique, a officiis sequi repudia
        ndae, pariatur sed, nihil assumenda nemo deserunt sit aspernatur! Pariatur distinctio itaque temporibus odio nesciunt similique exercitationem quis, qui repellat recusandae fugiat laboriosam explicabo corrupti amet cum modi facere! Illo, quis maxime? Fugiat explicabo nam in, aliquid soluta consequuntur. Sunt molestiae ipsa dolore voluptatem soluta hic architecto repellendus quidem, veniam beatae minus atque officiis? Asperiores eligendi iusto, nesciunt consectetur assumenda nisi labore rerum tempore autem ducimus dolorem dignissimos magnam deleniti ex laboriosam voluptate quas praesentium excepturi amet! Ullam doloremque sunt iusto beatae molestiae itaque illo eaque reiciendis ratione officiis incidunt veritatis magnam ipsa tempora neque repellat quod ea sit non eveniet, dolores ut! Aliquid quibusdam a beatae, provident consequuntur aspernatur tempore quae soluta vel iste expedita voluptatibus amet rerum eaque quaerat perspiciatis dolore nisi accusantium nulla maxime sunt facere? Facilis illum atque corrupti eveniet laborum ad accusantium. Consectetur nostrum blanditiis accusamus odio, doloremque vel unde explicabo optio repudiandae quae recusandae itaque quia ratione doloribus sint totam similique modi? Quam, atque nobis repellat dolore totam, minus sint esse ad aspernatur deleniti illo placeat illum error quos officia quia. Rerum sequi ipsum ea fuga! Cumque, harum natus. Cupiditate eum qui obcaecati alias perspiciatis! Ullam autem quaerat voluptas, saepe cumque nemo ad consequatur earum harum! Voluptas, ipsa ut? Accusamus vitae aliquid voluptates similique, voluptatem temporibus ipsum, odio mollitia itaque illum quod consequatur labore ullam id molestiae totam dignissimos, quo debitis laborum perferendis ut! Soluta culpa ducimus, sint accusamus fugit ab voluptatum accusantium perferendis adipisci libero ex et assumenda quidem, corrupti corporis at aperiam atque veritatis saepe natus labore quibusdam. Veniam corrupti ea et minima aspernatur magnam facere recusandae ipsa cumque animi laboriosam ullam voluptatem impedit vitae, rem esse aliquid, quae architecto delectus fuga a officiis. Veritatis eum molestias similique pariatur illum iure magni amet at vitae, debitis asperiores aut tenetur odit ducimus nemo numquam accusantium architecto maiores eius tempore dolor voluptatum! Dignissimos reprehenderit eius totam rem blanditiis, cupiditate quam tempore iusto voluptatibus libero magnam! Accusantium at incidunt laborum suscipit. Nemo tempora natus accusantium quis sequi similique veritatis harum rerum, aspernatur, corrupti earum ad cupiditate, dolorem ipsam quo obcaecati officiis fuga? Dolores repudiandae beatae eligendi laborum eum saepe non totam, obcaecati nesciunt maxime! Pariatur et voluptatem architecto atque provident in fugit nostrum dolorum velit libero excepturi molestiae esse omnis ut impedit dolore odit aspernatur voluptas tempora mollitia, maiores porro? Sint veritatis, a eveniet sit placeat dignissimos vel et quas asperiores tempore id quis cumque iure quae nesciunt magnam quo aperiam vero itaque aspernatur facere odit? Qui ipsum ex tempora cumque possimus minus autem deserunt aliquam? Omnis, quasi minus temporibus deleniti, atque doloremque eligendi dolor laudantium sit in perferendis. Accusantium saepe quas reprehenderit. Iusto at perferendis quo, quam sapiente unde non repellat inventore repudiandae! Odit, dolores rerum inventore vero veritatis ullam culpa omnis sed soluta voluptatum veniam eveniet aperiam voluptas esse iste, in deleniti possimus cum. Ipsam at ad placeat sit sequi nulla totam quis similique a est libero architecto explicabo modi labore harum consectetur quo deserunt laborum, aut maiores odio hic accusamus quaerat exercitationem! Cupiditate voluptatum eaque a illum provident temporibus sequi cumque cum ea exercitationem ullam unde excepturi, iste, nemo ipsa placeat aspernatur? Est officiis aut facilis perspiciatis nisi et non tempora dolores praesentium esse culpa ipsum a quidem ipsa minima illo autem molestias iusto, sunt animi nostrum eum veritatis odit laudantium. Pariatur reprehenderit aliquam, dolor iste repudiandae culpa, qui accusamus ipsa corrupti perferendis consequatur. Necessitatibus doloribus nemo dicta dignissimos et, labore voluptatum ut expedita, tempora neque iure, est quaerat nihil? Vel corrupti soluta ullam aperiam blanditiis fuga doloremque quisquam enim numquam! Necessitatibus pariatur dicta rem, placeat cupiditate blanditiis vitae ullam quia temporibus, recusandae aliquid iste voluptatum sit earum! Inventore qui saepe ex reiciendis incidunt quia illo reprehenderit, rem quisquam corporis ducimus, harum laborum iure nisi sunt maiores placeat quidem ratione alias eum atque commodi. Odit maiores a quaerat quia repudiandae esse sapiente numquam doloribus fugiat ipsa minus eius consequuntur, saepe atque? Odio facilis a veniam optio earum accusamus quia aspernatur ut ipsum sint sequi repudiandae rerum id placeat, soluta reiciendis similique quidem quas magnam enim officiis libero, adipisci ducimus deleniti! Dolore id tenetur dolor. Facere unde velit dicta, sed voluptates minima nihil dolorum corrupti libero voluptate repellendus nam, porro temporibus rerum quae illum voluptatibus delectus amet distinctio cumque quam nulla odit assumenda? Sunt exercitationem tenetur repudiandae enim iste dolores minus molestiae tempora laboriosam provident, laborum, a natus autem veniam odio temporibus distinctio mollitia atque optio.</h4>
      <Footer />
    </div>
  )
}

export default Home
const styles = {
  homeContainer: {
    textAlign: 'center',
    padding: '10px',
  },

};



