"use client"

import * as React from 'react'

import Button from '@mui/material/Button'

import Dialog from '@mui/material/Dialog'

import { DialogActions, DialogContent } from '@mui/material'
import LanguageSelect from './LanguageSelect'
import LevelRadio from './LevelRadio'
import useHome from '@/hooks/useHome'

export default function FilterDialog() {
    const [open, setOpen] = React.useState(false)
    const [language, setLanguage] = React.useState('all')
    const [level, setLevel] = React.useState('all')
    const { problemLevels } = useHome()
    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                問題を絞り込む
            </Button>
            <SimpleDialog
                open={open}
                handleClose={handleClose}
                language={language}
                setLanguage={setLanguage}
                problemLevels={problemLevels}
                setLevel={setLevel}
            />
        </div>
    )
}

function SimpleDialog({
    open,
    handleClose,
    language,
    setLanguage,
    problemLevels,
    setLevel,
}) {
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
                <LanguageSelect language={language} setLanguage={setLanguage} />
                <LevelRadio problemLevels={problemLevels} setLevel={setLevel} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>キャンセル</Button>
                <Button onClick={handleClose} autoFocus>
                    絞り込む
                </Button>
            </DialogActions>
        </Dialog>
    )
}