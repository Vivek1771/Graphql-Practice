import { gql } from "@apollo/client";


export const GET_RECORDS = gql`
query getRecords{
    getRecords(input: {sRecordType: "contact", sMediaType: ["video"], nStart: 1, nLimit: 5}){
      records{
        iUserId,
        sTitle,
        sDescription,
        sLocation
      },
      totalRecords
    }
  }
`;

