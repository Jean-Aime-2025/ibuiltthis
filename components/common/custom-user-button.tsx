'use client';

import {
  OrganizationSwitcher,
  UserButton,
  useUser,
  useClerk,
} from '@clerk/nextjs';
import { ArrowRight, Building2Icon, BuildingIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export default function CustomUserButton() {
  const { user, isLoaded } = useUser();
  const { closeUserProfile } = useClerk();
  const router = useRouter();

  if (!isLoaded) return null;

  const isAdmin = user?.publicMetadata?.isAdmin === true;

  const goToAdmin = () => {
    closeUserProfile();     
    router.push('/admin');  
  };

  return (
    <UserButton>
      <UserButton.UserProfilePage
        label="Organizations"
        labelIcon={<BuildingIcon className="size-4" />}
        url="organization"
      >
        <div className="p-4 flex-1 flex items-center justify-between">
          <h2>Manage Organization</h2>
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/submit"
            afterSelectPersonalUrl="/submit"
            appearance={{
              elements: {
                rootBox: 'w-full',
              },
            }}
          />
        </div>
      </UserButton.UserProfilePage>

      {isAdmin && (
        <UserButton.UserProfilePage
          label="Admin"
          labelIcon={<Building2Icon className="size-4" />}
          url="admin"
        >
          <div className="p-4 flex-1 flex items-center justify-between">
            <h2>Admin Panel</h2>
            <Button onClick={goToAdmin}>
              Go to Admin Panel
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </UserButton.UserProfilePage>
      )}
    </UserButton>
  );
}
