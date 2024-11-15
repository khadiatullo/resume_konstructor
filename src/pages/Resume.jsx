import Information from "../components/Information/Information";

function Resume({formData, setFormData, handleChange, preview, setPreview}){
    return(
        <Information formData={formData} setFormData={setFormData} handleChange={handleChange} preview={preview} setPreview={setPreview}/>
    )
}

export default Resume;