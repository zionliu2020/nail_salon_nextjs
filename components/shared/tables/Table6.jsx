import React from 'react'

const Table6 = () => {
  return (
    <div>
      <table className="mx-auto w-full text-center ">
        <thead>
          <tr>
            <th></th>
            <th className="text-center">Manicure</th>
            <th className="text-center">Pedicure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Regular</th>
            <td>20</td>
            <td>30</td>
          </tr>
          <tr>
            <th>Signature</th>
            <td>26</td>
            <td>37</td>
          </tr>
          <tr>
            <th>Gei Manicure</th>
            <td>35</td>
            <td>45</td>
          </tr>
          <tr>
            <th>Winn Deluxe</th>
            <td>N/A</td>
            <td>47</td>
          </tr>
          <tr>
            <th>Royal</th>
            <td>35</td>
            <td>57</td>
          </tr>
          <tr>
            <th>Royal Hot Stone</th>
            <td>N/A</td>
            <td>67</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table6
