import OriginalUrl from './OriginalUrl'

function RetrivedUrl({item}){
    console.log(item+" item");
    return(
        
         <>
        <div className="d-flex flex-column-reverse ">
        <OriginalUrl 
          originalUrl={item.originalUrl}
          shortenedUrl={item.shortenedUrl}
        />
        
        </div>
      
    </>
)
}
export default RetrivedUrl;