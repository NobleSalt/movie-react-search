import Category from './Category'

export default function CategoryList() {
    const categories = ['one', 'thwo']

    return categories.map(category => (
        <>
            <br />
            <Category key={categories.indexOf(category)} cat_name={category} />
        </>
    ))
}