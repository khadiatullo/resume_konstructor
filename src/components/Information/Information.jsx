import { useState } from 'react';
import './information.css'
import { Link } from 'react-router-dom';

function Information({formData, setFormData, preview, setPreview}){

    function handleChange(event){
        const {name, value} = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setSelectedImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setPreview(null);
        setSelectedImage(null);
      }
    };

    return(
        <main>
            <h1 className="information">Информация</h1>

            <div className='main_information'>

                <div className='conteiner_information'>

                    <div className='name_fathername_foto'>
                        <div className='name_fathername'>
                            <input name='surname' value={formData.surname} onChange={handleChange} type="text" placeholder='Фамилия'/>
                            <input name='name' value={formData.name} onChange={handleChange} type="text" placeholder='Имя'/>
                            <input name='fathername' value={formData.fathername} onChange={handleChange} type="text" placeholder='Отчество'/>
                        </div>

                    <div className='foto_download'>
                            <input id='fotoo' type="file" name="image" accept="image/*" onChange={handleImageChange} style={{visibility: 'hidden'}}/>
                            {preview && (
                                <img src={preview} alt="Preview" style={{ maxWidth: '200px', maxHeight: '160px'}} />
                            )}
                            <label className='label_foto' htmlFor="fotoo">Прикрипите фото</label>
                    </div>

                    </div>

                    <div>
                        <div>
                            <input name='post' value={formData.post} onChange={handleChange} type="text" placeholder='Должность'/>
                        </div>
                        <div>
                            <input name='salary' value={formData.salary} onChange={handleChange} type="text" placeholder='Желаемая зарплата'/>
                        </div>
                    </div>

                    <div className='chart'>
                        <form style={{marginRight: '1em', width: '50%'}} action="">
                            <input name='busyness' value={formData.busyness} onChange={handleChange} list="busyness" placeholder='Занятость'/>
                            <datalist id="busyness">
                                <option value="Полная" />
                                <option value="Частичная" />
                                <option value="Проектная" />
                                <option value="Стажировка" />
                                <option value="Волонтерство" />
                            </datalist>
                        </form>
                        <form style={{width: '50%'}} action="">
                            <input name='chart' value={formData.chart} onChange={handleChange} list="chart" placeholder='График работы'/>
                            <datalist id="chart">
                                <option value="Полный день" />
                                <option value="Сменный график" />
                                <option value="Гибкий график" />
                                <option value="Удаленная работа" />
                                <option value="Вахтовый метод" />
                            </datalist>
                        </form>
                    </div>

                    <div className='telefhone'>
                        <div style={{marginRight: '1em', width: '50%'}}><input name='telefhone' value={formData.telefhone} onChange={handleChange} type="text" placeholder='Телефон'/></div>
                        <div style={{width: '50%'}}><input name='email' value={formData.email} onChange={handleChange} type="email" placeholder='Электронная почта'/></div>
                    </div>
                    
                </div>

            </div>

            <div className='result_btn'><Link to='/result'><button type='submit' className='btn_res'>Перейти к результату</button></Link></div>
        </main>
    )
}

export default Information