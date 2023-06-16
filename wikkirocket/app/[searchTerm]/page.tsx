import getWikiResults from '@/lib/getWikiResults';
import Item from './components/Item';

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;

  const displayTerm = searchTerm.replace('%20', ' ');

  if (!data.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${searchTerm}`,
  };
}

const SearchResults = async ({ params: { searchTerm } }: Props) => {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  return (
    <main className='bg-slate-200 mx-auto max-w-lg py-1 min-h-screen'>
      {results ? (
        Object.values(results).map((res) => (
          <Item key={res.pageid} result={res} />
        ))
      ) : (
        <h2>{`${searchTerm} is not found`}</h2>
      )}
    </main>
  );
};

export default SearchResults;
