import React, { useState, useEffect } from 'react';
import Filter from '../components/carriers_components/Filter';
import { Link } from 'react-router-dom';


const arr = [
  {
    id: '0',
    type: '',
    name: 'Nino Auto Towing LLC',
    contact: {
      name: 'Lana Del Rey',
      img: '/img.png'
    },
    address: '1202b N Maxwell St Apt 301',
    city: 'Allentown',
    state: 'PA',
    phone: '6514169538'
  }, {
    id: '1',
    type: '',
    name: 'Nino Auto Towing LLC',
    contact: {
      name: 'Lana Del Rey',
      img: '/img.png'
    },
    address: '1202b N Maxwell St Apt 301',
    city: 'Allentown',
    state: 'PA',
    phone: '6514169538'
  }, {
    id: '2',
    type: '',
    name: 'Nino Auto Towing LLC',
    contact: {
      name: 'Lana Del Rey',
      img: '/img.png'
    },
    address: '1202b N Maxwell St Apt 301',
    city: 'Allentown',
    state: 'PA',
    phone: '6514169538'
  },
]

const Carriers = () => {
  // Инициализируем состояние с исходным массивом
  const [newArr, setNewArr] = useState([...arr]);

  useEffect(() => {
    const updatedItems = newArr.map(item => ({
      ...item,         // Копируем все существующие свойства объекта
      activity: false  // Добавляем новый ключ с значением
    }));
    setNewArr(updatedItems); // Обновляем состояние с новым массивом
  }, []); // Пустой массив зависимостей - эффект выполнится один раз при монтировании

  const checkboxFunc = (id) => {

    const updatedItems = newArr.map(i =>
      i.id === id ? { ...i, activity: !i.activity } : i
    );
    setNewArr(updatedItems); // Обновляем массив с изменённым ключом
    console.log(newArr);
  };
  const allCheckbox = () => {
    // Проверяем, есть ли хотя бы один объект с activity: false
    const hasFalse = newArr.some(item => item.activity === false);

    // Если есть хотя бы одно значение false, меняем все на true, иначе меняем все на false
    const updatedItems = newArr.map(item => ({
      ...item,
      activity: hasFalse ? true : false
    }));
   

    setNewArr(updatedItems);
  };
  const hasFalse = newArr.some(item => item.activity === false);
  return (
    <div className='cont px-5'>
      <Filter func={allCheckbox} />

      <table className="min-w-full mt-5 divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-[8px] font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <input onChange={allCheckbox} checked={!hasFalse} type="checkbox" name="" id="" />
                Type
              </div>
            </th>
            <th className="px-6 py-3 text-left text-[8px] font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-[8px] font-medium text-gray-500 uppercase tracking-wider">
              Contact
            </th>
            <th className="px-6 py-3 text-left text-[8px] font-medium text-gray-500 uppercase tracking-wider">
              Address
            </th>
            <th className="px-6 py-3 text-left text-[8px] font-medium text-gray-500 uppercase tracking-wider">
              City
            </th>
            <th className="px-6 py-3 text-left text-[8px] font-medium text-gray-500 uppercase tracking-wider">
              State
            </th>
            <th className="px-6 py-3 text-left text-[8px] font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
          </tr>
        </thead>
        <tbody className="">
          {newArr.map(i => (

            <tr key={i.id} className={`${+i.id % 2 === 0 ? 'bg-[#F7F6FE]' : ''}`}>

              <td className="px-6 py-2 whitespace-nowrap text-[8px]">
                <input type="checkbox" onChange={() => checkboxFunc(i.id)} checked={i.activity} />
               
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-[8px] text-blue-500 hover:underline">
                <Link to={`${i.id}`}>{i.name}</Link>
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-[8px]">
                <div className="flex items-center">
                  <img className="h-5 w-5 rounded-full" src={i.contact.img} alt="Avatar" />
                  <div className="ml-2">
                    <div className=" font-medium text-gray-900">{i.contact.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-[8px]">
                {i.address}
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-[8px]">
                {i.city}
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-[8px]">
                {i.state}
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-[8px]">
                {i.phone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Carriers;
