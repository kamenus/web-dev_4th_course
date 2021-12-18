import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Input, Button } from '@material-ui/core'
import { useController, useForm, Controller } from 'react-hook-form'
import axios from 'axios'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`
const StyledInput = styled(Input)`
  margin-bottom: 20px !important;
`
const StyledFileInput = styled.input`
  margin-bottom: 20px;
`

interface IAddProductPageProps {
  title?: string,
  description?: string,
  image?: string,
  onSubmit?: (...args: any) => void
}

const defaultValues = {
  title: '',
  description: '',
  image: ''
}

function AddProductPage (props: IAddProductPageProps) {
  const { title = '', description = '', image = '' } = props
  const {
    register, handleSubmit, setValue, setFocus, reset, control
  } = useForm({
    defaultValues: {
      title,
      description,
      image
    }
  })

  useEffect(() => {
    setFocus('title')
  }, [setFocus])

  const onSubmit = async (data: any) => {
    if (props.onSubmit) {
      props.onSubmit(data)
      reset({...defaultValues})
      return
    }
    const dataToSend = { ...data }
    dataToSend.image = dataToSend.image || 'https://i01.appmifile.com/webfile/globalimg/products/pc/mi-tv-q1/1.png'

    try {
      const res = await axios.post('/products', dataToSend)
      reset({...defaultValues})
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='title'
          control={control}
          render={({field}) =>
            <StyledInput placeholder='Title' {...field} required />
          }
          rules={{ required: true }}
        />
        <Controller
          name='description'
          control={control}
          render={({field}) =>
            <StyledInput placeholder='Description' {...field} required />
          }
          rules={{ required: true }}
        />
        <Controller
          name='image'
          control={control}
          render={({field}) =>
            <StyledInput placeholder='Image' {...field} required />
          }
        />
        {/* <StyledFileInput
          {...register('image')}
          accept='image/png, image/jpeg'
          name='image'
          multiple={false}
          type='file'
        /> */}
        <Button type='submit' color='secondary' variant='outlined'>
          Submit
        </Button>
      </StyledForm>
    </div>
  )
}

export default AddProductPage
