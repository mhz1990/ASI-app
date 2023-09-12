import React, {useState } from 'react'
import { Button } from 'react-native'
import DatePicker from 'react-native-datepicker'

const DailyReminder = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button title="date" onPress={() => setOpen(true)} />
            <DatePicker
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
        </>
    )
}

export default DailyReminder