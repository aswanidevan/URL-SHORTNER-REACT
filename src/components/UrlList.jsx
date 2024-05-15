import { Container } from "react-bootstrap";
import ShortUrlRow from "./ShortUrlRow";

function UrlList({list}){
    console.log(list);
    list.map((item,i)=>{ console.log(item.msg+' '+i)})
    return( 
    <> 
    
        <div className="d-flex flex-column-reverse adjustSize">
      {
      list.map((item,i) => {
        return(
        <ShortUrlRow key={i}
          msg={item.msg}
          originalUrl={item.originalUrl}
          shortenedUrl={item.shortenedUrl}
        />

        )
      })
      }
        </div>
    </>
)
}
export default UrlList;