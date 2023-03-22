import { useAxios } from "../components/hooks/useAxios";

const useService = () => {
    const {loading, request, error} = useAxios();

    const getAllCharacters = async (page) => await request({ url: 'character/', params: {page}}).then(res => res.results)

    const getCharacterById = async (id = 2) => await request({url: `character/${id}`}).then(res => res)

    return {loading, error, getAllCharacters, getCharacterById}
}

export default useService;