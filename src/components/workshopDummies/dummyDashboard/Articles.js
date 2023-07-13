import Article from './Article';
import articles from './articles.json'
import './Articles.scss';

const Articles = () => {
  return (
    <div className='articles'>
      {
        articles.map((data, index) => {
          return <Article 
            key={index}
            title={data.title}
            date={data.date}
            details={data.details}
            images={data.images}
            summary={data.summary}
            location={data.location}
          />
        })
      }
    </div>
  )
}

export default Articles;