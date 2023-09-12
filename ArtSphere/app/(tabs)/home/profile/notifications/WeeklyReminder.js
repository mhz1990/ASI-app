import React, {useState } from 'react'
import { Button, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-datepicker'

const WeeklyReminder = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <>
            {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
            <TouchableOpacity onPress={() => setOpen(true)}>
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
            </TouchableOpacity>
        </>
    )
}

export default WeeklyReminder