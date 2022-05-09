export const Search: any = ({searchValue, startSearch, changeSearch}: {
    searchValue: string, startSearch: Function, changeSearch: Function
}) => {

    return (
        <div className="search-wrapper">
            <div>
                <button onClick={() => {
                    startSearch()
                }}></button>
                <input type="text" placeholder="Искать здесь..."
                       defaultValue={searchValue}
                       onChange={(e) => {
                           changeSearch(e.target.value)
                       }}/>
            </div>
        </div>
    );
}
