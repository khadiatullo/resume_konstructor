import { usePDF } from 'react-to-pdf';
import React from 'react';
import './result.css'

function Result({formData, preview}){

    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

    return (
        <div className='result_resume'> 
            <div className='viewingResume'>Предварительный просмотр</div>
            <div ref={targetRef}>

                <div className='all_result_resume'>                 
                    <div className='result_name_surname_resume'>
                        <div><img className='resume_foto_result' src={preview} alt="фото" /></div>
                        <ul>
                            <li className='result_name_fathername'>{formData.surname} {formData.name} {formData.fathername}</li>
                            <li className='result_post'>{formData.post}</li>
                            <li><span style={{color: 'green', fontWeight: '500'}}>№</span> {formData.telefhone}</li>
                            <li><span style={{color: 'green', fontWeight: '500'}}>@</span> {formData.email}</li>
                        </ul>
                    </div>

                    <div className='result_salary_chart_result'>
                        <ul>
                            <li className='salary_res'>Желаемая зарплата:</li>
                            <li className='busyness_res'>Занятость:</li>
                            <li className='chart_res'>График работы:</li>
                        </ul>
                        <ul>
                            <li>{formData.salary}</li>
                            <li>{formData.busyness}</li>
                            <li>{formData.chart}</li>
                        </ul>
                    </div>
                </div>

            </div>
            <button className='download_btn' onClick={() => toPDF()}>Скачать</button>
        </div>
    )
}

export default Result;
