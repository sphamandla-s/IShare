'use client'

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';



export default function GoogleAddressAuto() {
  return (
    <GooglePlacesAutocomplete
    apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API!}
    selectProps={{
      isClearable : true,
      placeholder : "Search By Address",
      className : "w-full",
      onChange : (place)=>{
        console.log(place)
      }
    }}
/>
  )
}
