import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import useRequest from "../hooks/useRequest";
import { langOptions, useLangContext } from "../Contexts/LangContext";

const CreatePage = () => {
    const {lang} = useLangContext()

    const { sendRequest, loading } = useRequest({ url: '/api/v1/todo', method: 'POST' })
    const navigate = useNavigate()

    const onSubmit = (name, isCompleted) => {
        sendRequest({ name, isCompleted })
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    };

    if (loading) return <p>Loading...</p>

    return (
        <div>
        <UserForm onFormSubmit={onSubmit}/>
        <p>{langOptions[lang]}</p>
    </div>
    );
};

export default CreatePage;
