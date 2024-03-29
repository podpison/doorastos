import { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import cn from 'classnames';
import { customersAPI } from '@/firebase';
import { toast } from 'react-toastify';
import { InputMask } from '@react-input/mask';

//string for dynamic types (e.g. stock)
export type PhoneFormTypeType = string | 'consultation' | 'recall' | 'antiCutPrice' | 'antiTheftSystem' | 'armoredPrice' | 'deliveryAndInstallation' | 'bookAMeasurement'

type Props = {
  additionalValues?: object
  type?: PhoneFormTypeType
  className?: string
  onSubmit?: () => void
}

const initialValues = {
  phone: '',
};

const validationSchema = Yup.object().shape({
  phone: Yup.string().phone('ru', true, 'Wrong format!').required(),
});

type SubmitDataType = {
  type: Props['type']
  additionalValues?: object
} & typeof initialValues

const PhoneForm: FC<Props> = ({ additionalValues, type = 'consultation', className, onSubmit }) => {
  return <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={async (values, { resetForm }) => {
      let data: SubmitDataType = {
        ...values,
        type,
      }
      additionalValues && (data['additionalValues'] = additionalValues);

      let resp = await toast.promise(customersAPI.add(data),
        {
          pending: 'Pending...',
          success: 'Success! We\'ll contact you soon',
          error: 'Oops... Something went wrong'
        }
      );

      if (resp) {
        onSubmit && onSubmit();
        resetForm();
      }
    }}
  >
    {({ isSubmitting, errors, getFieldProps }) => (
      <Form className={cn('', className)}>
        <div className='flex flex-col gap-y-2.5'>
          <div className='group'>
            <InputMask
              className={cn(
                'text14 h-7 w-full border-b outline-none transition-colors',
                errors.phone ? 'text-red border-b-red placeholder:text-red' : 'border-b-grey1 group-hover:text-grey1',
              )}
              placeholder='Phone'
              type="phone"
              aria-label="Your phone"
              mask="+7 (___) ___-__-__"
              replacement={{ _: /\d/ }}
              {...getFieldProps('phone')}
            />
          </div>
          <p className='text-tiny text-grey2'>
            By clicking on the send button, you agree to the terms of
            <a className='text-blue1 transition-colors cursor-pointer hover:text-blue2' href='/processingOfPersonalData' target='_blank'> personal data processing</a>
          </p>
        </div>
        <button
          className={cn(
            'text-esm font-light bg-blue1 text-white border border-blue1 rounded-full w-[90px] h-[90px] transition-all hover:bg-blue2 hover:border-blue2 active:bg-white active:text-black',
            errors.phone && 'opacity-80 pointer-events-none',
          )}
          aria-label='Send phone'
          type="submit"
          disabled={isSubmitting || errors.phone !== undefined}
        >
          Send
        </button>
      </Form>
    )}
  </Formik >
};

export default PhoneForm;