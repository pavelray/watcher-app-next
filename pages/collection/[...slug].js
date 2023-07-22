import React, { Fragment } from "react";
import CollectionDetails from "../../components/Business/CollectionDetails";
import { getMediaDetailsDataAPIUrl } from "../../utils/apiUtills";
import { appendToReqPerson, MEDIA_TYPE } from "../../utils/constants";
import httpService from "../../utils/httpService";

const CollectionDetailsPage = ({ id, collection, isMobile, type }) => {
  return (
    <Fragment>
      <CollectionDetails collection={collection} id={id} isMobile={isMobile} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { slug } = query;

  const type = MEDIA_TYPE.COLLECTION;

  const id = slug[0];

  let url = `${getMediaDetailsDataAPIUrl(type, id)}${appendToReqPerson}`;
  const collectionDetails = await httpService.get(url);

  const { parts } = collectionDetails;
  const sortedParts = parts.sort(
    (a, b) => new Date(a.release_date) - new Date(b.release_date)
  );
  const updatedCollection = { ...collectionDetails, parts: sortedParts };
  return {
    props: {
      id,
      type: MEDIA_TYPE.COLLECTION,
      collection: {
        details: updatedCollection,
      },
    },
  };
}

export default CollectionDetailsPage;
