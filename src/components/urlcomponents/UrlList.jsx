
import ShortUrlRow from "./ShortUrlRow";

function UrlList({list}){
    return( 
    <> <div className="adjustSize ">
        <div className="d-flex flex-column-reverse ">
      {
      list.slice(-3).map((item,i) => {
        return(
        <ShortUrlRow key={i}
          originalUrl={item.originalUrl}
          shortenedUrl={item.shortenedUrl}
        />
        )
      })
      }
        </div>
        </div>
    </>
)
}
export default UrlList;