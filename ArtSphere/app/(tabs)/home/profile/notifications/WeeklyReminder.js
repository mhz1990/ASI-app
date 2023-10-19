import React, {useState } from 'react'
import { TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

const WeeklyReminder = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <>
            <TouchableOpacity onPress={() => setOpen(true)}>
                <DateTimePicker
                    mode="datetime"
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </TouchableOpacity>
        </>
    )
}

export default WeeklyReminder