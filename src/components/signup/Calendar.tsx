import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import { getMonth, getYear } from "date-fns";
import { useState, forwardRef, useEffect } from 'react';

import * as Styled from '@/styles/SignUpPage';
import CalendarSvg from '@/assets/icons/calendar.svg?react';



const years_range = Array.from({length: new Date().getFullYear() - 1900}, (_, i) => new Date().getFullYear() - i);
const months_range = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']; 

interface CalendarProps {
    setYear : (year : string) => void;
    setMonth : (month : string) => void;
    setDate : (day : string) => void;
}

const Calendar : React.FC<CalendarProps> = ({setYear, setMonth, setDate}) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const CustomCalendar = forwardRef(({ onClick } : React.DOMAttributes<HTMLButtonElement> , ref? : React.ForwardedRef<HTMLButtonElement> | undefined) => (
        <Styled.CustomButton className={selectedDate === null ? '' : 'custom-inputSelected'} onClick={onClick} ref={ref}>
          <CalendarSvg width={36} height={36}/>
        </Styled.CustomButton>
      ));

    const onChangeCalendar = (date : Date | null) => {
          if(date !== null){
            setSelectedDate(date);
            setYear(date.getFullYear().toString());
            setMonth((date.getMonth() + 1).toString());
            setDate(date.getDate().toString())
        }
    }
    useEffect(() => {
        if(selectedDate !== null){
            
        }
    }, [selectedDate])

    return (
            <Styled.CalendarContainer>
            <DatePicker
                    dateFormat='yyyy.MM.dd' // 날짜 형태
                    shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                    minDate={new Date('1900-01-01')} // minDate 이전 날짜 선택 불가
                    maxDate={new Date()} // maxDate 이후 날짜 선택 불가
                    selected={selectedDate}
                    locale={ko}
                    onChange={(date) => onChangeCalendar(date)}
                    customInput={<CustomCalendar />}
                    renderCustomHeader={({
                      date,
                      changeYear,
                      changeMonth,
                      decreaseMonth,
                      increaseMonth,
                      prevMonthButtonDisabled,
                      nextMonthButtonDisabled
                    }) => (
                      <div
                        style={{
                          margin: 10,
                          display: "flex",
                          gap : '5px',
                          justifyContent: "left"
                        }}
                      >
                        
                        <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(Number(value))}>
                            {
                              years_range.map((option) => {
                                return (
                                  <option key={option}>{option}</option>
                                )
                              })
                            }
                        </select>
              
                        <select
            value={months_range[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months_range.indexOf(value))
            }
          >
            {months_range.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                          {"<"}
                        </button>
                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                          {">"}
                        </button>
                      </div>
                    )} 
                />
        </Styled.CalendarContainer>
    )
}

export default Calendar;