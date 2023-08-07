import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';

const Footer: React.FC = () => {
  const intl = useIntl();
  // const defaultMessage = intl.formatMessage({
  //   id: 'app.copyright.produced',
  //   defaultMessage: 'ArcGis后台信息管理系统',
  // });
    const myProjectMessage = intl.formatMessage({
      id: 'AuthorMessage',
      defaultMessage: 'ArcGis后台信息管理系统'
    })

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${myProjectMessage}`}
      links={[
       
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
       
      ]}
    />
  );
};

export default Footer;
