import { useRef, useState, useEffect } from 'react';
import CompanyLogoLabel from './CompanyLogoLabel'

function useDynamicSVGImport(name, options = {}) {
  const ImportedIconRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { onCompleted, onError } = options;
  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(`/src/assets/logos/companies/${name}.svg`)
        ).ReactComponent;
        if (onCompleted) {
          onCompleted(name, ImportedIconRef.current);
        }
      } catch (err) {
        if (onError) {
          onError(err);
        }
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
}

export default function Icon({ name, onCompleted, onError }) {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load icon: {error.message}</div>;
  }

  if (SvgIcon) {
    return <CompanyLogoLabel LogoComponent={SvgIcon} />
  }

  return null
}